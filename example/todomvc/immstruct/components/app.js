/** @jsx omom.h */
import omom from '../../../../index'
import emit from '../actions/todoAction'

import Header      from './header'
import Footer      from './Footer'
import MainSection from './mainSection'

export default omom.component((items /* cursor */) => {
  return (
    <div>
      <Header />
      <MainSection {...items} />
      <Footer {...items}/>
    </div>
  )
})
