import { useState } from 'react';
import './App.css';
import RequestForm from './Components/RequestForm';
import ResponseDisplay from './Components/ResponseDisplay';
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Body from './Components/Body';
import Document from './Components/Document';



function App() {
  const [response, setResponse] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  console.log("formData",formData);
  return (
    <div className="App">
      <Box  w={"100%"} h={"auto"} display={"flex"} alignItems={"center"} justifyContent={"center"} p={"5% 0"} >
        <Box w={"90%"} bg={"gray.300"} h={"90%"} p={"5%"}  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" borderRadius={"10px"}>
        <Heading> REST Client</Heading>
          <RequestForm setResponse={setResponse} formData={formData}/>
          <Tabs variant='enclosed'>
            <TabList>
              <Tab>How To Use</Tab>
              <Tab>Response</Tab>
              <Tab>Request Body</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Document/>
              </TabPanel>
              <TabPanel>
                <ResponseDisplay response={response} />
              </TabPanel>
              <TabPanel>
                <Body formData={formData} setFormData={setFormData}/>
              </TabPanel>
            </TabPanels>
          </Tabs>


        </Box>

      </Box>

    </div>
  );
}

export default App;