import {TextArea, Box, Button} from '@sanity/ui'
import {generateText} from '../helpers/gptClient'
import {set, unset} from 'sanity'

export const GptTextField = (props: any) => {
  const {elementProps, onChange, value = ''} = props

  const createPrompt = (text: string) => {
    return 'Check the spelling and formatting of this post, return only the corrected text: ' + text
  }

  const generatePost = async () => {
    const prompt = createPrompt(value)
    const newValue = await generateText(prompt)
    onChange(newValue ? set(newValue) : unset())
  }

  return (
    <div>
      <Box paddingBottom={2}>
        <Button text="Format post" onClick={generatePost} />
      </Box>
      <TextArea {...elementProps} rows={10} />
    </div>
  )
}
