import React, {useState} from 'react'

import Authentication from '../../util/Authentication/Authentication'

import {PublicObjectives} from './PublicObjectives'
import {Overlay} from './Overlay'
import {ModConfig} from './ModConfig'

import './App.css'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.Authentication = new Authentication()

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
        this.twitch = window.Twitch ? window.Twitch.ext : null
        this.state={
            finishedLoading:false,
            theme:'light',
            isVisible:true,
            gameState:null,
            globalConfiguration:null,
        }
    }

    contextUpdate(context, delta){
        if(delta.includes('theme')){
            this.setState(()=>{
                return {theme:context.theme}
            })
        }
    }

    visibilityChanged(isVisible){
        this.setState(()=>{
            return {
                isVisible
            }
        })
    }

    componentDidMount(){
        if(this.twitch){
            this.twitch.onAuthorized((auth)=>{
                this.Authentication.setToken(auth.token, auth.userId)
                if(!this.state.finishedLoading){
                    // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

                    // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
                    this.setState(()=>{
                        return {finishedLoading:true}
                    })
                }
            })

            this.twitch.configuration.onChanged(config => {
                if (this.twitch.configuration.broadcaster) {
                    this.loadGameStateFromString(this.twitch.configuration.broadcaster.content)
                }

                if (this.twitch.configuration.global) {
                    this.setState({globalConfiguration: JSON.parse(this.twitch.configuration.global.content)})
                }
            })

            this.twitch.listen('broadcast',(target,contentType,body)=>{
              this.twitch.rig.log('broadcast!')
              this.twitch.rig.log(target)
              this.twitch.rig.log(body)
                const gameState = this.loadGameStateFromString(body)
            })

            this.twitch.onVisibilityChanged((isVisible,_c)=>{
                this.visibilityChanged(isVisible)
            })

            this.twitch.onContext((context,delta)=>{
                this.contextUpdate(context,delta)
            })
        }
    }

    loadGameStateFromString(gameStateString){
        const gameState = JSON.parse(gameStateString)

        this.setState({gameState})
    }

    componentWillUnmount(){
        if(this.twitch){
            this.twitch.unlisten('broadcast', ()=>console.log('successfully unlistened'))
        }
    }

    authWithPollingService() {
        return fetch(`${this.state.globalConfiguration.apiEndpoint}/auth/getAccessToken`, {
          headers: {
            'x-client-id': this.state.globalConfiguration.clientId,
            'x-api-key': this.state.globalConfiguration.apiKey,
            'Accept': 'application/json',
          },
        }).then(response => response.json())
        .then(body => body.accessToken)
        .then(token => this.setState(state => ({
          globalConfiguration: {
            ...state.globalConfiguration,
            authToken: token,
          }
        })))

    }

    setupGame(gameKey) {
      this.twitch.rig.log('SENDING REQUEST TO BACKEND TO LISTEN FOR GAME CHANGES')
      this.twitch.rig.log(`channelId ${this.Authentication.getChannelId()}`)
      this.twitch.rig.log(`gameKey ${gameKey}`)
      this.twitch.rig.log(`TO ${this.state.globalConfiguration.apiEndpoint}`)
      let chain = Promise.resolve()
      if (!this.state.globalConfiguration.authToken) {
        chain = chain.then(() => this.authWithPollingService())
      }

      chain.then(() => fetch(`${this.state.globalConfiguration.apiEndpoint}/sessions`, {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${this.state.globalConfiguration.authToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'twitch',
          channelId: this.Authentication.getChannelId(),
          ttsKey: gameKey,
        })
      }))
    }

    render(){
        const {gameState, isVisible, finishedLoading, globalConfiguration} = this.state
        if(finishedLoading && isVisible) {
            return (
                <div className="App">
                    <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                        {gameState && <Overlay openLabel='see objectives'>
                            <PublicObjectives {...gameState}/>
                        </Overlay>}
                        {this.Authentication.isModerator() && <Overlay openLabel='open mod panel'>
                            <ModConfig
                                setupGame={this.setupGame.bind(this)}
                                gameKey={gameState && gameState.key}
                            />
                        </Overlay>}
                    </div>
                </div>
            )
        }else{
            return (
                <div className="App">
                </div>
            )
        }

    }
}
