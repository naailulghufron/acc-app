import Layout from "../../components/Layouts"
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Button,
  Stack,
  Link

} from '@mui/material';
import NextLink from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {users : data}
  }
}

// const users = users

const userList = ({users}) => {
  return (
    <Layout>
    <div>
      <Typography>Users List</Typography>
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
                    <TableCell>Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {users.map((s) => (
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
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <NextLink href={`/users/${s.id}`}>
                          {/* <Link> */}
                            <Button variant="outlined" size="small" color="success">Show</Button>
                          {/* </Link> */}
                        </NextLink>
                        <Button variant="outlined" size="small" color="secondary">Edit</Button>
                        <Button variant="outlined" size="small" color="error">Delete</Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
    </Layout>
  )
}
export default userList