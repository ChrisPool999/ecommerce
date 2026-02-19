import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { STEPS, type NavigableStep } from './types';
import { useCheckout } from './Context';

export function Stepper() {
  const {step, setStep, stepsDone} = useCheckout()


  function ButtonStepper({buttonStep}: {buttonStep: NavigableStep}) {
    const style = (buttonStep === step) ? 'font-black bg-black h-7 w-7' : 'font-bold bg-black/50 h-5 w-5'
    const hoverStyle = "cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"

    return (
      <div className="flex flex-col">
        <button 
          onClick={() => setStep(buttonStep)} 
          className={`relative flex rounded-full justify-center items-center text-white ${style} ${hoverStyle}`}
        >
          { buttonStep === step || !stepsDone[buttonStep] ? 
            ( <span>{STEPS.indexOf(buttonStep) + 1}</span> ) : 
            ( <CheckCircleIcon className="text-black bg-white"></CheckCircleIcon> )
          }  
        </button>
      </div>        
    )
  }

  function handleLabelStyle(label: NavigableStep) {
    const active = 'text-black text-md font-bold'
    const complete = 'text-black text-sm'
    const incomplete = 'text-black/50 text-sm'

    if (label === step) {
      return active
    }

    return !stepsDone[label] ? complete : incomplete
  }

  return (
    <div>
      <div className="flex items-center pb-2 px-3">
        <ButtonStepper buttonStep="shipping"></ButtonStepper>
        <div className={`h-1 flex-1 mx-3 self-center ${stepsDone["shipping"] ? 'bg-black' : 'bg-black/50'}`}></div>
        <ButtonStepper buttonStep="payment"></ButtonStepper>
        <div className={`h-1 flex-1 mx-3 self-center ${stepsDone["payment"] ? 'bg-black' : 'bg-black/50'}`}></div>
        <ButtonStepper buttonStep="confirm"></ButtonStepper>
      </div>

      <div className="flex justify-between w-full">
        <span className={`whitespace-nowrap ${handleLabelStyle("shipping")}`}>Shipping</span>
        <span className={`whitespace-nowrap ${handleLabelStyle("payment")}`}>Payment</span>
        <span className={`whitespace-nowrap ${handleLabelStyle("confirm")}`}>Confirm</span>
      </div>
    </div>
  )
}