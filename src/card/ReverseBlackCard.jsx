import DialogActions from '@mui/material/DialogActions';
import { Fragment } from 'react';
import { Dialog } from '@mui/material';
import tshirt from "../assets/Oversized_Tee_MockUp black.png"


export default function ReverseBlackCard({ black, setBlack }) {
    return (
        <Fragment>
            <Dialog
                onClose={() => setBlack(false)}
                aria-labelledby="customized-dialog-title"
                open={black}
                maxWidth
            >
                <div className='w-[800px] h-[600px] flex flex-col justify-start items-center'>
                    <span className='w-full h-full'>
                        <img src={tshirt} alt="tshirt" />
                    </span>
                </div>
                <DialogActions>
                    <button onClick={() => setBlack(false)}>
                        Close
                    </button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}