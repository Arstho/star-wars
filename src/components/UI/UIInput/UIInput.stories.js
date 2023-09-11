import { useState } from "react";
import UIInput from "./UIInput";

export default {
   title: 'Ui-kit/UIInput',
   component: UIInput
}

const Template = (args) => {
   const [value, setValue] = useState('')

   const handleInputChange = value => {
      setValue(value)
   }

   return (
      <UIInput
         {...args}
         value={value}
         handleInputChange={handleInputChange}
      />
   )
}

const props = {
   value: '',
   handleInputChange: () => console.log('Input change'),
   placeholder: 'Placeholder',
   classes: ''
}

export const Default = Template.bind({})
Default.args = {
   ...props
}