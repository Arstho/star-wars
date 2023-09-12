import UIVideo from "./UIVideo";
import video from "./video/video.mp4";

export default {
   title: 'Ui-kit/UIVideo',
   component: UIVideo
}

const Template = (args) => <UIVideo {...args} />

const props = {
   src: video,
   playbackRate: 1.0,
   classes: '',
}

export const Default = Template.bind({})

Default.args = {
   ...props,
}