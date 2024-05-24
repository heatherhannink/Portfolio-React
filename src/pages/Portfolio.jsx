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
        projTitle={'Medical Tracker'}
        projImage={"/images/medical.png"}
        projText={'Made a medical tracking app!'}
        projURL={'https://heathhttps://medicaltracker.onrender.com/'}
        projGitHub={'https://github.com/heatherhannink/medicaltracker'}
        />
        <Project
        projTitle={'Mediation App'}
        projImage={"/images/meditation.png"}
        projText={'Go Meditate!'}
        projURL={'https://heatherhhttps://fathomless-garden-22238-8788b79a83a2.herokuapp.com/login'}
        projGitHub={'httphttps://github.com/rbenjamin4/meditation-app'}
        />
        <Project
        projTitle={'Calendar'}
        projImage={"/images/calendar.png"}
        projText={'What better way to keep track of your day!'}
        projURL={'https://heatherhannink.github.io/calendar/'}
        projGitHub={'https://github.com/heatherhannink/calendar'}
        />
        <Project
        projTitle={'Password Generator'}
        projImage={"/images/password.png"}
        projText={'Create a new password'}
        projURL={'https://heatherhannink.github.io/passwordgenerator/'}
        projGitHub={'https://github.com/heatherhannink/passwordgenerator'}
        />


      </SimpleGrid>
    </>
  )
}