import {
  Box,
  Button,
  Text,
  FormControl,
  FormHelperText,
  /* TextField, */
  Input,
  /* TextareaAutosize, */
  Textarea,
  Select,
  MenuItem,
  Stack,
} from '@chakra-ui/react'

import { FormProps } from '../../interfaces/common'
import CustomButton from './CustomButton'

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Text fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Text>

      <Box mt={2.5} borderRadius="15px" padding="20px" bg="#fcfcfc">
        <form
          style={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d',
              }}
            >
              Enter property name
            </FormHelperText>
            <Input
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('title', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d',
              }}
            >
              Enter Description
            </FormHelperText>
            <Textarea
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              style={{
                width: '100%',
                background: 'transparent',
                fontSize: '16px',
                borderColor: 'rgba(0,0,0,0.23)',
                borderRadius: 6,
                padding: 10,
                color: '#919191',
              }}
              {...register('description', { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#11142d',
                }}
              >
                Select Property Type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue="apartment"
                {...register('propertyType', {
                  required: true,
                })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">farmhouse</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#11142d',
                }}
              >
                Enter property price
              </FormHelperText>
              <Input
                fullWidth
                required
                id="outlined-basic"
                color="info"
                type="number"
                variant="outlined"
                {...register('price', { required: true })}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d',
              }}
            >
              Enter Location
            </FormHelperText>
            <Input
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('location', { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Text color="#11142d" fontSize={16} fontWeight={500} my="10px">
                Property Photo
              </Text>

              <Button
                /* component="label" */
                sx={{
                  width: 'fit-content',
                  color: '#2ed480',
                  textTransform: 'capitalize',
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleImageChange(e.target.files![0])
                  }}
                />
              </Button>
            </Stack>
            <Text fontSize={14} color="#808191" sx={{ wordBreak: 'break-all' }}>
              {propertyImage?.name}
            </Text>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form
