import Layout from "../Components/Layouts";
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper

} from '@mui/material';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const res = await fetch('https://covid19.mathdro.id/api/confirmed')
  const data = await res.json();

// console.log(data)
  return {
    props: {dt : data}
  }
}

const show = ({dt}) => {
  // console.log(dt)
  return (
    <Layout>
    <div>

          {/* <ul> */}
            {/* <li>
              Province State : {s.provinceState}
            </li>
            <li>country region :{s.countryRegion}</li>
            <li> */}
              {/* Address : {s.address.street}{s.address.suite}{s.address.city}{s.address.geo.lat}{s.address.geo.lng} */}
            {/* </li>
          </ul> */}
          
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Website</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {dt.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.username}</TableCell>
                    <TableCell>{s.email}</TableCell>
                    <TableCell>
                      {s.address.street} 
                      {s.address.suite} 
                      {s.address.city} 
                    </TableCell>
                    <TableCell>{s.phone}</TableCell>
                    <TableCell>{s.website}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <table>
            <thead>
              <tr>
                <td>Province State</td>
                <td>Country Region</td>
                <td>Las update</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{s.provinceState}</td>
                <td>{s.lastUpdate}</td>
              </tr>
            </tbody>
          </table> */}

    </div>
    </Layout>
  )
}

export default show;

