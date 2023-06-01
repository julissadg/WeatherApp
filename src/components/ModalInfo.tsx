import { Modal, Box, Typography } from "@mui/material"
import HourInfo from "./HourInfo";

const ModalInfo = ({ open, onClose, data, day, location }: { open: any, onClose: any, data: any, day: any, location: any }) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'hidden',
        content: {
            padding: 12,
            overflow: 'scroll'
        },
        width: 800,
        '@media (max-width: 856px)': {
            width: '590px'
        },
        '@media (max-width: 636px)': {
            width: '490px'
        },
        '@media (max-width: 516px)': {
            width: '390px'
        },
        '@media (max-width: 400px)': {
            width: '270px'
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h3 className="card-title">{
                    day ? new Date(day).toLocaleDateString('en-US', { weekday: 'long' }):
                    'Today'
                } </h3>
                <Typography
                    sx={{ px: 4, mt: 2, maxHeight: "50vh", width: "100%", overflowY: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}
                >
                    {Object.keys(data).map((i) => (
                        <HourInfo key={i}
                            time={data[i]?.time}
                            icon={data[i]?.condition.icon}
                            temp_c={data[i]?.temp_c}
                            info={data[i]?.condition.text}
                            location={location}
                        />
                    ))}
                </Typography>

            </Box>
        </Modal>
    )
}

export default ModalInfo;