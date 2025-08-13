## Project setup was done with vite, as vite is fast and prioritizes speed and performance. It also supports ES modules, which is a modern way of writing JavaScript.


## Framework: React 
## Language: JavaScript

I did not use React + swc which was an option because I was not sure whether to use it or not, but this is what I found online regarding this:

"React with Vite and SWC(Speedy Web Compiler) offers significant advantages over a 'regular' React setup with Vite. Here are some benefits:
- Faster Compilation and Transpilation: This is because SWC is written in Rust and is much faster than Babel. I'd say Rust is a great language to learn if you're interested in backend development and compilation tools (PS: you probably need to be very good at basic development in django, node, or java to use rust, it has a steep learning curve). 
- It has a smoother and more responsive development workflow especially for larger and more complex React projects. Thankfully this is a simple project so I can afford to not use it as I learn and build more complex projects, maybe I change. 
- The Build Output tends to be smaller which means faster load times for endusers. At the end of the day, customers just want an app that is fast and efficient, they don't care about how well you can code. This is not to deter you from making sure your code looks good, but make sure you code with a focus on the end user, not just your fellow devs. 

I found in a post dated 2025 that standard React plugin offers more stability than the React + SWC plugin. It points out that SWC could:
- Intefere with Module loading which means it won't properly handle edge cases in module resolution this causes runtime errors
- The preambles can be inconsistent which can cause issues with how modules interact with one another. (module preamble is a small script that is injected at the beginning of a module's execution, it is used to set up code execution environment).
- SWC can generate code that are technically correct but do not align with standard practices.
- SWC can be difficult in debugging. And the ecosystem compatibility can be limited. 

Anyways, this is a simple app to get you to learn the basics of React.
You will learn about components, and useState Hook