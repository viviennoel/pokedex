import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Carousel from '../components/CustomCarousel';
import testData from './testData.json';
import { BrowserRouter as Router } from 'react-router-dom';
import Accordion from '../components/CustomAccordion';

describe('homepage', ()=>{
  // CAROUSEL
  it('caroussel is well displayed', async ()=>{
    global.fetch = jest.fn().mockImplementation(()=>{
      return new Promise((resolve)=>
        resolve({
          json: ()=>{
            return{
              testData
            }
          }
        })
      )
    })
    await act(async ()=>
      render(
        <Router>
          <Carousel pokemonList={(await global.fetch()).json().testData}></Carousel>
        </Router>
      )
    )
    testData.map((pokemon)=>{
      expect(screen.getByTestId(`name_${pokemon.name}`)).toBeDefined();
      expect(screen.getByTestId(`image_${pokemon.name}`)).toBeDefined();
      expect(screen.getByTestId(`description_${pokemon.name}`)).toBeDefined();
    })
  })
  // ACCORDION
  it('caroussel is well displayed', async ()=>{
    global.fetch = jest.fn().mockImplementation(()=>{
      return new Promise((resolve)=>
        resolve({
          json: ()=>{
            return{
              testData
            }
          }
        })
      )
    })
    await act(async ()=>
      render(
        <Router>
          <Accordion pokemonList={(await global.fetch()).json().testData}></Accordion>
        </Router>
      )
    )
    testData.map((pokemon)=>{
      expect(screen.getByTestId(`name_${pokemon.name}`)).toBeDefined();
      expect(screen.getByTestId(`image_${pokemon.name}`)).toBeDefined();
    })
  })
})

