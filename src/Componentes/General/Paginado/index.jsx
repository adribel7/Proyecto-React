import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginado =({count,page,onChange}) => {
    return (
        <div className="paginacion">
            <Stack  spacing={2}>
                <Pagination count={count} page={page} onChange= {onChange} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
};

export default Paginado;

//        <div aria-label="Page navigation example">
//            <ul class="pagination justify-content-center">
//                <li class="page-item disabled">
//                    <a class="page-link">Previous</a>
//                </li>
//                <li class="page-item"><a class="page-link" href={page}></a></li>
//                <li class="page-item">
//                    <a class="page-link" href={onchange}>Next</a>
//                </li>
//            </ul>
//        </div>

//count={count} page={page} onChange= {onChange}