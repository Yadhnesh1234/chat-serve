const OtpVerify=()=>{
    return(
   <div className="h-screen flex justify-center items-center">
    <div class="max-w-md mx-auto border  mt-20 rounded px-20 py-20">
        <h2 className="text-2xl text-primary flex justify-center mb-3">Verify OTP</h2>
        <p className="flex justify-center">OTP send To <b>+91***67</b></p>
        <form class="shadow-md px-4 py-6 mt-10">
            <div class="flex justify-center gap-2 mb-6">
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
                <input class="w-12 h-12 text-center border rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required/>
            </div>
            <div class="flex items-center justify-center">
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Verify
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800 ml-4" href="/">
                    Resend OTP
                </a>
            </div>
        </form>
    </div>
    </div>
    )
}

export default OtpVerify