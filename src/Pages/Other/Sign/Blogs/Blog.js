import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='blog-main text-3xl'>Welcome To Our Blog Page</h1>
                <div className='blog'>
                    <div className='single-blog'>


                        <h3 className='text-lg my-2'>Difference between SQL and NoSQL?</h3>
                        <p>The five critical differences between SQL vs NoSQL are:<br />

                            1.SQL databases are relational, NoSQL databases are non-relational.<br />
                            2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br />
                            3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br />
                            4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br />
                            5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className='single-blog'>
                        <h3 className='text-lg my-2'>What is JWT, and how does it work??</h3>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                    </div>
                    <div className='single-blog'>
                        <h3 className='text-lg my-2'>What is the difference between javascript and NodeJS?</h3>
                        <p>
                            Difference between Nodejs and JavaScript : <br />
                            1. NodeJS :
                            NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                            <br />
                            2. JavaScript :
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.

                        </p>
                    </div>
                    <div className='single-blog'>
                        <h3 className='text-lg my-2'>How does NodeJS handle multiple requests at the same time?</h3>
                        <p>
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallels using the NodeJS cluster module or worker_threads module.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;