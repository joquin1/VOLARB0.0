"use client"

import { VideoPlayer } from "./video-player"

interface VideoPlayerWrapperProps {
  videoSrc: string
}

export function VideoPlayerWrapper({ videoSrc }: VideoPlayerWrapperProps) {
  return <VideoPlayer videoSrc={videoSrc} />
} 