import React from 'react'
import Authentication from '../../util/Authentication/Authentication'

import './App.css'

const ModConfig = ({ channelId, token }) => <p>mod config for {channelId} with token {token}</p>

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

            this.twitch.listen('broadcast',(target,contentType,body)=>{
                const gameState = JSON.parse(body.replaceAll('\'', '"'))

                this.setState({gameState})
                if (this.Authentication.isBroadcaster()) {
                    // TODO set in the broadcast configuration
                }
            })

            this.twitch.onVisibilityChanged((isVisible,_c)=>{
                this.visibilityChanged(isVisible)
            })

            this.twitch.onContext((context,delta)=>{
                this.contextUpdate(context,delta)
            })
        }
    }

    componentWillUnmount(){
        if(this.twitch){
            this.twitch.unlisten('broadcast', ()=>console.log('successfully unlistened'))
        }
    }

    render(){
        const {gameState} = this.state
        if(this.state.finishedLoading && this.state.isVisible){
            return (
                <div className="App">
                    <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                        <p>My token is: {this.Authentication.state.token}</p>
                        <pre>{JSON.stringify(this.Authentication.state, null, 2)}</pre>
                        <pre>{JSON.stringify(gameState, null, 2)}</pre>
                        {this.Authentication.isModerator() && <ModConfig
                            channelId={this.Authentication.getChannelId()}
                            token={this.Authentication.state.token}
                        />}
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
