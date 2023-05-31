import {HStack, VStack, Image, Center} from 'native-base'
import BackgroundImg from '@assets/background.png'
import Logo from '@assets/series.svg'

export default function SignUp(){
  return(
    <VStack flex={1}>
      <Image 
        source={BackgroundImg}
        alt='pessoas na academia'
        resizeMode='contain'
        position='absolute'
      />

      <Center>
        <Text Color='gray.100' fontSize='3xl'>Gym</Text>
        <Text Color='gray.100' fontSize='sm'>Recarregue</Text>
        <Imput />
      </Center>


    </VStack>
  );
}