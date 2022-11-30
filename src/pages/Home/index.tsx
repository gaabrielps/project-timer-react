import {Play} from 'phosphor-react'
import { CountContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartButton, TaskInput } from './styles'

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                    type="text" 
                    placeholder='De um nome ao seu projeto' 
                    id="task" />
                    
                    <datalist id='task-suggestions'>
                        <option value="valor 1"/>
                        <option value="valor 2"/>
                        <option value="valor 3"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    
                    <MinutesAmountInput 
                    type="number" 
                    id="minutesAmount"
                    placeholder='00'
                    step={5}
                    min={5}
                    max={60} 
                    />

                    <span>minutos.</span>
                </FormContainer>
                <CountContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountContainer>
                <StartButton type="submit">
                    <Play size={24} />
                    Comerçar

                </StartButton>
            </form>
        </HomeContainer>
    )
}