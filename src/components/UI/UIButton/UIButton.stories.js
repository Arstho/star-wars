import UIButton from "./UIButton";

export default {
   title: 'Ui-kit/UIButton',
   component: UIButton
}

const Template = (args) => <UIButton {...args} />

const props = {
   text: 'Hello', 
   onClick: () => HTMLFormControlsCollection.log('click'), 
   disabled: false, 
   thema: 'dark', 
   classes: ''
}

export const Ligth = Template.bind({})

Ligth.args = {
   ...props,
   thema: 'ligth',
}

export const Dark = Template.bind({})

Dark.args = {
   ...props,
   thema: 'dark',
}

export const Disabled = Template.bind({})

Disabled.args = {
   ...props,
   disabled: true,
}