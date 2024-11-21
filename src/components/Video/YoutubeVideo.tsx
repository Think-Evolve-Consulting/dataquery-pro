import React from 'react';

interface YoutubeVideoProps {
  url: string;
}

function getYouTubeVideoId(url: string) {
  try {
    const urlObj = new URL(url);
    if (
      urlObj.hostname === 'www.youtube.com' ||
      urlObj.hostname === 'youtube.com'
    ) {
      return urlObj.searchParams.get('v'); // Extracts the 'v' parameter
      // eslint-disable-next-line no-else-return
    } else if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.substring(1); // Extracts the path after the '/'
    }
    return null; // Not a valid YouTube URL
  } catch (error) {
    return null;
  }
}
const YoutubeVideo = ({ url }: YoutubeVideoProps) => {
  return (
    <div className="aspect-video size-full overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
        className="size-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export { YoutubeVideo };
