import React, { Component } from 'react'

 class Newsletter extends Component {
  constructor(props) {
    super(props)
  
   this.inputRef=React.createRef()
  }
  componentDidMount(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 text-white px-4 py-16'>
      <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>want tips & tricks to optimize your flow?</h1>
        <p>sign up to our website and stay upto date</p>
      </div>
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row justify-between w-full items-center'>
          <input className='p-3 rounded-md flex w-full text-black' type="email" placeholder='enter email' ref={this.inputRef}/>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>notify me</button>
        </div>
        <p>we care about the protection of your data. Read our <span className='text-[#00df9a]'>privacy policy</span> </p>

      </div>
      
    </div>
    )
  }
}

export default Newsletter
