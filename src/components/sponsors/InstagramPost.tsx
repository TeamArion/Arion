import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface InstagramPostProps {
  type: 'post' | 'reel';
  mediaUrl: string;
  caption: string;
  likes: number;
  comments: number;
  username?: string;
  avatarUrl?: string;
}

export default function InstagramPost({
  type,
  mediaUrl,
  caption,
  likes,
  comments,
  username = "_team.arion_",
  avatarUrl = "/Logo.svg"
}: InstagramPostProps) {
  const isVideo = type === 'reel' || mediaUrl.match(/\.(mp4|webm)$/i);

  return (
    <div className="flex flex-col w-full max-w-sm bg-[#050505] border border-white/10 rounded-xl overflow-hidden font-sans hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:border-primary/50 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center p-1 border border-primary/20">
            <img src={avatarUrl} alt={username} className="w-full h-full object-contain block" />
          </div>
          <span className="font-semibold text-sm text-white group-hover:text-primary transition-colors">{username}</span>
        </div>
        <MoreHorizontal className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-white transition-colors" />
      </div>

      {/* Media */}
      <div className="relative aspect-[4/5] bg-black overflow-hidden flex items-center justify-center group pointer-events-none border-y border-white/5">
        {isVideo ? (
          <video src={mediaUrl} className="w-full h-full object-contain pointer-events-auto block" autoPlay muted loop playsInline />
        ) : (
          <img src={mediaUrl} alt={caption} className="w-full h-full object-contain pointer-events-auto block" />
        )}
        {isVideo && (
           <div className="absolute top-3 right-3 text-white drop-shadow-md z-10 bg-black/60 p-1.5 rounded-full border border-primary/30 backdrop-blur-md">
              <svg aria-label="Reels" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16" className="text-primary">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.206 22.5 1.5 17.794 1.5 12S6.206 1.5 12 1.5 22.5 6.206 22.5 12 17.794 22.5 12 22.5zm5.564-10.9-7.5-4.5A.5.5 0 0 0 9 7.5v9a.5.5 0 0 0 .764.428l7.5-4.5a.5.5 0 0 0 0-.856z" fillRule="evenodd"></path>
              </svg>
           </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col p-4 gap-3 bg-gradient-to-b from-[#050505] to-black">
        <div className="flex justify-between items-center text-white">
          <div className="flex gap-4 pointer-events-auto">
            <Heart className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
            <MessageCircle className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
            <Send className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
          </div>
          <Bookmark className="w-6 h-6 hover:text-primary cursor-pointer transition-colors pointer-events-auto" />
        </div>
        
        <div className="font-semibold text-sm text-white">
          {likes.toLocaleString()} <span className="text-zinc-500 font-normal">likes</span>
        </div>

        <div className="text-sm text-white/90 line-clamp-2 hover:line-clamp-none transition-all">
          <span className="font-semibold mr-2 text-primary">{username}</span>
          {caption}
        </div>

        <div className="text-xs text-zinc-500 cursor-pointer hover:text-primary transition-colors uppercase tracking-wider font-medium pointer-events-auto">
          View all {comments.toLocaleString()} comments
        </div>
      </div>
    </div>
  );
}
