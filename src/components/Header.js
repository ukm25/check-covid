import { Typography } from '@mui/material';
import moment from 'moment';
import "moment/locale/vi";
import { memo } from 'react';

moment.locale("vi");
const Header = () => {
return(
    <>
        <Typography  variant='h3'>Số liệu COVID-19</Typography>
        <Typography gutterBottom>{moment().format('LLL')}</Typography>
    </>
)
}

export default memo(Header);