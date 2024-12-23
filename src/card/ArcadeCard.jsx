import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Fragment } from 'react';
import { Dialog } from '@mui/material';
import tshirt from "../assets/png.png"


export default function ArcadeCard({ arcade, setArcade }) {
    return (
        <Fragment>
            <Dialog
                onClose={() => setArcade(false)}
                aria-labelledby="customized-dialog-title"
                open={arcade}
                maxWidth
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>
                <div className='w-[800px] h-[600px] flex flex-col justify-start items-center'>
                    <span className='w-full h-full'>
                        <img src={tshirt} alt="tshirt" />
                    </span>
                </div>
                <DialogActions>
                    <Button onClick={() => setArcade(false)}>
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}