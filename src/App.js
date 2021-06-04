import { useState } from 'react';
import {
  Input,
  Stack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react"
import './App.css';

function App() {

  const [ allData, setData ] = useState({
    triceps: '',
    subscapular: '',
    ss: '',
    height: '',
    hb: '',
    fb: '',
    fag: '',
    ts: '',
    ccg: '',
    cag: '',
    weight: '',
    mcg: '',
    cs: ''
  })

  const [ results, setResults ] = useState({
    endomorphy: '',
    mesomorphy: '',
    ectomorphy: '',
  })

  function handleChange(e) {
    setData({
      ...allData,
      [e.target.name]: e.target.value
    })
  }

  function calculateEndomorphy() {
    const X = (allData.triceps + allData.subscapular + allData.ss) * (170.18 / allData.height);
    const final = -0.7182 + (0.1451 * X) - (0.00068 * X * X) + (0.0000014 * X * X * X);
    setResults({
      ...results,
      endomorphy: final
    })
  }

  function calculateCAG() {
    const CAG = allData.fag - allData.ts / 10;
    setData({
      ...allData,
      cag: CAG
    })
  }

  function calculateCCG() {
    const CCG = allData.mcg - allData.cs / 10;
    setData({
      ...allData,
      ccg: CCG
    })
  }

  function calculateMesomorphy() {
    const final = ((0.858 * allData.hb) + (0.601 * allData.fb) + (0.188 * allData.cag) + (0.161 * allData.ccg)) - (0.131 * allData.height) + 4.5;
    setResults({
      ...results,
      mesomorphy: final
    })
  }

  function calculateEctomorphy() {
    const HWR = allData.height / Math.cbrt(allData.weight);
    let final = 0;
    if(HWR >= 40.75) 
      final = (0.732 * HWR) - 28.58;
    
    else if(HWR < 40.75 && HWR > 38.25) 
      final = (0.463 * HWR) - 17.63;
    
    else if(HWR <= 38.25)
      final = 0.1;
    
    setResults({
      ...results,
      ectomorphy: final
    });
  }

  return (
    <div className="container">
      <h1 className="heading">Heath Carter</h1>
      <h1 className="sheading">Somatotype Simplifier</h1>
      <div className="data">
        <Accordion allowMultiple>
        <AccordionItem>
            <h2 style={{padding: '10px'}}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  1. Endomorphy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <InputGroup>
                  <InputLeftAddon children="Triceps"/>
                  <Input placeholder="0" name="triceps" defaultValue={allData.triceps} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Height (cm)"/>
                  <Input placeholder="0" name="height" defaultValue={allData.height} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Subscapular"/>
                  <Input placeholder="0" name="subscapular" defaultValue={allData.subscapular} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Supraspinale skinfold"/>
                  <Input type="tel" placeholder="0" name="ss" defaultValue={allData.ss} onChange={handleChange}/>
                </InputGroup>
                <p style={{display: results.endomorphy === '' ? 'none' : null, fontSize: '16px', fontWeight: 'bold'}}>{`Result: ${results.endomorphy}`}</p>
                <Button colorScheme="teal" style={{width: '160px'}} onClick={calculateEndomorphy}>Calculate</Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2 style={{padding: '10px'}}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  2. CAG
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <InputGroup>
                  <InputLeftAddon children="Triceps Skinfold" />
                  <Input type="tel" placeholder="0" name="ts" defaultValue={allData.ts} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Flexed Arm Girth" />
                  <Input type="tel" placeholder="0" name="fag" defaultValue={allData.fag} onChange={handleChange}/>
                </InputGroup>
                <p style={{display: allData.cag === '' ? 'none' : null, fontSize: '16px', fontWeight: 'bold'}}>{`Result: ${allData.cag}`}</p>
                <Button colorScheme="teal" style={{width: '160px'}} onClick={calculateCAG}>Calculate</Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2 style={{padding: '10px'}}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  3. CCG
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <InputGroup>
                  <InputLeftAddon children="Calf Skinfold" />
                  <Input type="tel" placeholder="0" name="cs" defaultValue={allData.cs} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Maximal Calf Girth" />
                  <Input type="tel" placeholder="0" name="mcg" defaultValue={allData.mcg} onChange={handleChange}/>
                </InputGroup>
                <p style={{display: allData.ccg === '' ? 'none' : null, fontSize: '16px', fontWeight: 'bold'}}>{`Result: ${allData.ccg}`}</p>
                <Button colorScheme="teal" style={{width: '160px'}} onClick={calculateCCG}>Calculate</Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2 style={{padding: '10px'}}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  4. Mesomorphy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <InputGroup>
                  <InputLeftAddon children="CAG" />
                  <Input type="tel" placeholder="0" name="cag" defaultValue={allData.cag} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="CCG" />
                  <Input type="tel" placeholder="0" name="ccg" defaultValue={allData.ccg} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Height" />
                  <Input type="tel" placeholder="0" name="height" defaultValue={allData.height} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Femur Breadth" />
                  <Input type="tel" placeholder="0" name="fb" defaultValue={allData.fb} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Humerus Breadth"/>
                  <Input type="tel" placeholder="0" name="hb" defaultValue={allData.hb} onChange={handleChange}/>
                </InputGroup>
                <p style={{display: results.mesomorphy === '' ? 'none' : null, fontSize: '16px', fontWeight: 'bold'}}>{`Result: ${results.mesomorphy}`}</p>
                <Button colorScheme="teal" style={{width: '160px'}} onClick={calculateMesomorphy}>Calculate</Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2 style={{padding: '10px'}}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  5. Ectomorphy (HWR)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <InputGroup>
                  <InputLeftAddon children="Height" />
                  <Input type="tel" placeholder="0" name="height" defaultValue={allData.height} onChange={handleChange}/>
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Weight" />
                  <Input type="tel" placeholder="0" name="weight" defaultValue={allData.weight} onChange={handleChange}/>
                </InputGroup>
                <p style={{display: results.ectomorphy === '' ? 'none' : null, fontSize: '16px', fontWeight: 'bold'}}>{`Result: ${results.ectomorphy}`}</p>
                <Button colorScheme="teal" style={{width: '160px'}} onClick={calculateEctomorphy}>Calculate</Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default App;
