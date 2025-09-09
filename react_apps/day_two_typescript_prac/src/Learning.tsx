import React from 'react'

const Learning: React.FC = () => {
  return (
    <div className='w-[80%] my-2 mx-auto text-2xl'>

      {/* Why Type Script? */}
      <div>
        <p>
        Why do We use TypeScript? Well, I learned that one of the major uses
          lies in the ability to prevent unexpected behavior such as :
        </p>
        <p className='bg-black text-white w-[40%]'>
          if("" == 0){  
          }
          being true for some weird reason.
        </p>
        <p>
          Also having a NaN output because we tried to access a property that doesn't exist. <br />
          This can be a real issue when writing huge code bases. So to avoid this wahala, TypeScript came to save the day (woohoo). <br />
          We can say that TypeScript is a superset of JavaScrxipt, (that means everything in JS works in TS but not everything in TS is in JS) <br />
          In summary, JavaScript is a dynamic language and TypeScript helps in making the code we write more predictable. It is very important as it gives us a lot of control over what we expect from our code and avoids any wahala.
  
        </p>
      </div>
      
        
    </div>
  )
}

export default Learning