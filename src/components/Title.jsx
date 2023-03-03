import React from 'react'
import List from './List'

const Title = () => {
  // now we will make array object 

  const array = [
    {id:0, title:"Page 1", description:"This is Page 1"},
    {id:1, title:"Page 2", description:"This is Page 2"},
    {id:2, title:"Page 3", description:"This is Page 3"},
  ]

  return (
    <div>
      {/* <p>This is Title Page</p> */}
   
      {array.map((e) =>{
        return(
          <List 
            key={e.id}
            title = {e.title}
            description = {e.description}
          />
        )
      })
      }
    </div>
  )
}

export default Title

