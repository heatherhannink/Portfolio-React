import { SimpleGrid } from '@chakra-ui/react'
import Project from '../components/Project';
import { IconButton } from '@chakra-ui/react'
// import ImageeCommerce from "../../public/images/ecommerce"
export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>

      <SimpleGrid minChildWidth='120px' spacing='40px'>
        <Project
        projTitle={'Quiz'}
        projImage={"/images/quiz.png"}
        projText={'Made a fun coding quiz!'}
        projURL={'https://heatherhannink.github.io/quiz/'}
        projGitHub={'https://github.com/heatherhannink/quiz'}
        />
        <Project
        projTitle={'Weather'}
        projImage={"/images/weather.png"}
        projText={'Made a Weather App!'}
        projURL={'https://heatherhannink.github.io/weather/'}
        projGitHub={'https:https://github.com/heatherhannink/weather//github.com/heatherhannink/quiz'}
        />
        <Project
        projTitle={'Quiz'}
        projImage={"/images/quiz.png"}
        projText={'Made a fun coding quiz!'}
        projURL={'https://heatherhannink.github.io/quiz/'}
        projGitHub={'https://github.com/heatherhannink/quiz'}
        />
        <Project
        projTitle={'Quiz'}
        projImage={"/images/quiz.png"}
        projText={'Made a fun coding quiz!'}
        projURL={'https://heatherhannink.github.io/quiz/'}
        projGitHub={'https://github.com/heatherhannink/quiz'}
        />
        <Project
        projTitle={'Quiz'}
        projImage={"/images/quiz.png"}
        projText={'Made a fun coding quiz!'}
        projURL={'https://heatherhannink.github.io/quiz/'}
        projGitHub={'https://github.com/heatherhannink/quiz'}
        />
        <Project
        projTitle={'Quiz'}
        projImage={"/images/quiz.png"}
        projText={'Made a fun coding quiz!'}
        projURL={'https://heatherhannink.github.io/quiz/'}
        projGitHub={'https://github.com/heatherhannink/quiz'}
        />


      </SimpleGrid>
    </>
  )
}