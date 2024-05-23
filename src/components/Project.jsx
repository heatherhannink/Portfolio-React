import { Card, CardBody, Stack, Image, Text, Link, Flex } from '@chakra-ui/react';
export default function Project(props) {
  const { projImage, projTitle, projText, projURL, projGitHub } = props;
  return (
    <>
      <Card maxW='sm' m={4}>
        <CardBody>
          <Stack mt='3' spacing='1'>
            <h4>{projTitle}</h4>
            <Flex flexDirection="row" alignItems="center" >
              <a href={projURL}>
                <Image src={projImage} width={"200px"} height={"auto"} maxW={"100%"} />
              </a>
            </Flex>
            <p>{projText}</p>
            <ul className="project-links">
              <li><a href={projURL}>{projTitle}</a></li>
              <li><a href={projGitHub}>GitHub</a></li>
            </ul>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}