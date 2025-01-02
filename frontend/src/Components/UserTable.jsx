import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const UserTable = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    // Normalize data: If `users` is a single object, convert it to an array
    const normalizedUsers = Array.isArray(users) ? users : [users];
    setFilteredUsers(normalizedUsers);
  }, [users]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredUsers((prevUsers) =>
      prevUsers.filter(
        (user) =>
          user.username.toLowerCase().includes(value) ||
          user.email.toLowerCase().includes(value)
      )
    );
  };

  const handleSort = (order) => {
    const sorted = [...filteredUsers].sort((a, b) => {
      if (order === "asc") return a.username.localeCompare(b.username);
      return b.username.localeCompare(a.username);
    });
    setFilteredUsers(sorted);
    setSortOrder(order);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ overflowX: "auto" }}>
      <TextField
        label="Search by username or email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <span>Name</span>
                  <IconButton
                    onClick={() => handleSort("asc")}
                    size="small"
                    aria-label="Sort ascending"
                  >
                    <ArrowUpward fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => handleSort("desc")}
                    size="small"
                    aria-label="Sort descending"
                  >
                    <ArrowDownward fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={user.id || index}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default UserTable;
