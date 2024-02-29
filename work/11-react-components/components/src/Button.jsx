import './Button.css';
import {useRef} from "react";

function Button({
    children,
    className,
    disabled=false,
    onClick,
    type="button",
    visual="button",
  }) {
    const linkRef = useRef();
    const buttonRef = useRef();
    const submitRef = useRef();
    let buttonClass = "button";
    let dialogRef = buttonRef;
    if (visual === "link") {
        buttonClass = "button-link";
        dialogRef = linkRef;
    }
    if (type === "submit") {
        buttonClass = "button-submit"
        dialogRef = submitRef;
    }
    return (
        <>
            <button onClick={() => dialogRef.current.showModal()}
                className={`${buttonClass} ${className}`}
                disabled={disabled} type={type}
                // onClick={onClick}
            >
                {children}
            </button>
            <dialog ref={buttonRef}>
                You clicked BUTTON!
                <button onClick={() => buttonRef.current.close()}>
                    close
                </button>
            </dialog>
            <dialog className="link-dialog" ref={linkRef}>
                You clicked LINK!
                <button onClick={() => linkRef.current.close()}>
                    close
                </button>
            </dialog>
            <dialog className="submit-dialog" ref={submitRef}>
                You clicked SUBMIT!
                <button onClick={() => submitRef.current.close()}>
                    close
                </button>
            </dialog>
        </>
    );
}

export default Button;
