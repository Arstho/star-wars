import UILoading from "./UILoading";

export default {
   title: 'Ui-kit/UILoading',
   component: UILoading
}

const Template = (args) => <UILoading {...args} />

const props = {
   thema: 'black', 
   isShadow: false,
   classes: ''
}

export const Black = Template.bind({})

Black.args = {
   ...props,
   thema: 'black',
}

export const White = Template.bind({})

White.args = {
   ...props,
   thema: 'white',
   isShadow: true,
}

export const Blue = Template.bind({})

Blue.args = {
   ...props,
   thema: 'blue',
}