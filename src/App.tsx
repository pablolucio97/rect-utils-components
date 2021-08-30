import { useContext } from 'react'
import { GlobalStyles } from './styles/Globals'
import { InfoCard } from './components/InfoCard'
import { Dialog } from './components/Dialog'
import { PrimaryButton } from './components/PrimaryButton'
import CollapsibleContainer from './components/CollapsibleContainer'
import { SecondaryButton } from './components/SecondaryButton'
import Input from './components/Input'
import Form from './components/Form'
import { FormEvent } from 'react'
import { Avatar } from './components/Avatar'
import { QuestionForm } from './components/QuestionForm'
import { Header } from './components/Header'
import { palletCollors } from './styles/palletCollors'
import { Footer } from './components/Footer'
import SocialRibbon from './components/SocialRibbon'
import { TopMenu } from './components/TopMenu'
import { Section } from './components/Section'
import {useSectionAndMenuLinkage} from './hooks/useSectionAndMenuLinkage'
import { ReadBar } from './components/ReadBar'
import { Newsletter } from './Newsletter'
import { Title } from './components/Title'
//do progressbarread works
//create functionalities to dialog -- fix dialog context
//create step indicator
//create slider image
//fix section scroll and section/topmenu context flow

const App = () => {

     function test(e: FormEvent) {
        e.preventDefault()
        console.log('ok')
    }
    
    const {firstMenuId, secondMenuId} = useSectionAndMenuLinkage()

    console.log(firstMenuId)

    const menuItems = [
        {
            itemUrl: secondMenuId,
            itemText: 'Facebook',
        },
        {
            itemUrl: 'https://www.linkedin.com/in/pablo-silva-76b521156/',
            itemText: 'Linkedin',
        },
        {
            itemUrl: firstMenuId,
            itemText: 'Youtube',
        },
    ]


    return (
        <>
             <GlobalStyles />
            <Header
                logoSize='large'
                logoUrl='https://images.unsplash.com/photo-1630046213113-111c5a2772ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
                title='React Utils Components'
                showSearchBar
                displayElements='spaced'
            />
            <TopMenu
                menuList={menuItems}
            />
            <ReadBar
                barType='thick'
                background='red'
            />
            <Title
                title='sjdfhskdf'
                renderElement='h3'
            />
            <Newsletter
                title='Fique por dentro'
                textInfo='Cadastre-se na nossa newsletter e receba novidades.'
                buttonlabel='Cadastrar'
                placeholder='digite seu melhor e-mail'
                style={{
                    borderRadius: '8px'
                }}
                showFocusEffect
            />
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
                children={PrimaryButton}
            />
            <Dialog
                title='Dialog'
                content='Are you sure for delete this item from your cart?'
            />
            <PrimaryButton
                label='click'
                showPressedEffect
                buttonStyle='solid'
            />
            <SecondaryButton
                label='click'
                showPressedEffect
                buttonStyle='outline'
            />
            <CollapsibleContainer
                title='How much it costs?'
                content='It is free for 3 months and you will paid after this period.'
            />
            <Input
                label='Password'
                placeholder='Type your password'
                style={{
                    borderColor: 'red',
                    borderRadius: '0px'
                }}
            />
            <Form
                formTitle='New register'
                nameLabel='Name'
                emailLabel='Email'
                passwordLabel='Password'
                namePlaceholder='Type for name'
                emailPlaceholder='Type for email'
                passwordPlaceholder='Type for password'
                buttonStyle='outline'
                postFunction={test}
            />
            <Avatar
                urlImg='https://images.unsplash.com/photo-1629878165113-73a6276d25a6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                size='large'
                borderType='thin'
            />
            <QuestionForm
                question='How many is 12 + 34'
                formName='quesition1'
                idOptionA='1'
                idOptionB='2'
                idOptionC='3'
                idOptionD='4'
                optionA='12'
                optionB='12'
                optionC='12'
                optionD='12'
            />
            <Section firstMenuId={firstMenuId} />
            <Section firstMenuId={secondMenuId} />
            <SocialRibbon
                iconsStyle={{
                    iconsSize: 'tiny'
                }}
                background='#55ff'
                displayContent='end'
                linkedinUrl='https://www.linkedin.com/in/pablo-silva-76b521156/'
            />
            <Footer
                titleCol1='Sobre'
                text1Col1='JavaScript'
                text2Col1='React'
                text3Col1='Redddddact Native'
                text4Col1='Node'
                text5Col1='CSS3'
                titleCol2='Events'
                text1Col2='NLW'
                text2Col2='FronBR'
                text3Col2='JS Brasil'
                text4Col2='CondingHire'
                text5Col2='GoToCode'
                titleCol3='Events'
                text1Col3='NLW'
                text2Col3='FronBR'
                text3Col3='JS Brasil'
                text4Col3='CondingHire'
                text5Col3='GoToCode'
                titleCol4='Events'
                text1Col4='NLW'
                text2Col4='FronBR'
                text3Col4='JS Brasil'
                text4Col4='CondingHire'
                text5Col4='GoToCode'
                titleCol5='Events'
                text1Col5='NLW'
                text2Col5='FronBR'
                text3Col5='JS Brasil'
                text4Col5='CondingHire'
                text5Col5='GoToCode'
                extraDataText='lorem isdfhskjdhfksjdfhgshkdfgsdjkhgfsdjhkfgsdfjkhsgdfjkshdfgs'
                showExtraData
            /> 
        </>
    )
}

export default App