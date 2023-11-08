import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos, direction }) => {
    // console.log(videos);
    if (!videos?.length) return 'Loading..';
    if (!videos) {
        return <div> No videos to display</div >;
    }
    return (
        <div>
            <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
                {videos.map((item, idx) => (
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ))}
            </Stack>
        </div>
    )
}

export default Videos
