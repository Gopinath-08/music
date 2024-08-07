import TrackPlayer, { Event } from "react-native-track-player";

import { playListData } from "./src/constant";

export async function setupPlayer () {
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack()
        isSetup= true;
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup =true;
        
    }finally{
        return isSetup;
    }
}

export async function addTrack() {
    await TrackPlayer.add(playListData)
}

export async function playBackServices () {
    TrackPlayer.addEventListener(Event.RemotePause,() =>{
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay,() =>{
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext,() =>{
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious,() =>{
        TrackPlayer.skipToPrevious()
    })
}