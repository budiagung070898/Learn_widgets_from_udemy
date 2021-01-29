import React, {useState} from 'react'
import Accordion from './component/Accordion'
import Search from './component/Search'
import Dropdown from './component/Dropdown'
import Translate from './component/Translate'
import Route from './component/Route'
import Header from './component/Header'

const items = [
    {
        title : "Open 1",
        content : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000"
    },
    {
        title : "Open 2",
        content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    },
    {
        title : "Open 3",
        content : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
    }
]

const options = [
    {
        value: 'red',
        label: 'Red Color'
    },
    {
        value: 'green',
        label: 'Green Color'
    },
    {
        value: 'blue',
        label: 'Blue Color'
    }
]

const App = () => {

    const [selected,setSelected] = useState(options[0])

    return (
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label = 'Select a Color'
                    options = {options}
                    selected = {selected}
                    onSelectedChange = {setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    )
}

export default App
