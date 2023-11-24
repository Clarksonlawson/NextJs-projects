export default function Login(){
    return (<main className="justify-center md:flex md:justify-center mb-12 ">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary ">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
              <hr className="my-4" />
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
    </main>)
}