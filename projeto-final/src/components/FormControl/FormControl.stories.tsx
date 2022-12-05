import { useState } from "react";
import { Placeholder } from "../../assets/Icons/General/Placeholder";
import { GlobalStyle } from "../../styles/Global";
import { FormControl, FormControlProps} from "./FormControl";


export default {
  title: 'FormControl/FormControl',
  component: FormControl,
}


const TampleteDefault = () => {
  const [value, setValue] = useState('')

  return(
    <>
      <GlobalStyle />
      <div>
        <h1>Default: (digite algo)</h1>
        <FormControl
          variant="default"
          mensagem="Assistive Text"
          value={value}
          setValue={setValue}
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />

        <br />
        <br />

        <h1>Disable</h1>
        <FormControl
          variant="default"
          disable
          mensagem="Assistive Text"
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />

        <br />
        <br />

        <h1>Error: (digite algo)</h1>
        <FormControl
          variant="default"
          error={true}
          mensagem="Assistive Text"
          value={value}
          setValue={setValue}
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />
      </div>
    </>
  )
}
export const Default = TampleteDefault.bind({})


const TampleteAction = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Default: (digite algo)</h1>
        <FormControl
          variant="action"
          mensagem="Assistive Text"
          value={value}
          setValue={setValue}
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />

        <br />
        <br />

        <h1>Disable</h1>
        <FormControl
          variant="action"
          disable
          mensagem="Assistive Text"
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />

        <br />
        <br />

        <h1>Error: (digite algo)</h1>
        <FormControl
          variant="action"
          error={true}
          mensagem="Assistive Text"
          value={value}
          setValue={setValue}
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />
      </div>
    </>
  )
}
export const Action = TampleteAction.bind({})


const TampleteIcons = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Default: (digite algo)</h1>
        <FormControl
          variant="icons"
          showIcon1
          showIcon2
          showIconLeft
          icon1={<Placeholder />}
          icon2={<Placeholder />}
          iconLeft={<Placeholder />}
          value={value}
          setValue={setValue}
          mensagem="Assistive Text"
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />

        <br />
        <br />

        <h1>Disable</h1>
        <FormControl
          variant="icons"
          showIcon1
          showIcon2
          showIconLeft
          icon1={<Placeholder />}
          icon2={<Placeholder />}
          iconLeft={<Placeholder />}
          disable
          mensagem="Assistive Text"
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />

        <br />
        <br />

        <h1>Error: (digite algo)</h1>
        <FormControl
          variant="icons"
          showIcon1
          showIcon2
          showIconLeft
          icon1={<Placeholder />}
          icon2={<Placeholder />}
          iconLeft={<Placeholder />}
          error
          mensagem="Error Mensage"
          value={value}
          setValue={setValue}
          name="teste"
          placeholder="StoryBook"
          type="text"
          label="Digite Aqui"
        />
      </div>
    </>
  )
}
export const Icons = TampleteIcons.bind({})
