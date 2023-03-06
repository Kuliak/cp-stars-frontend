// import { useTranslation } from 'react-i18next';
// import { Button, FormControl, MenuItem, Select, Stack } from '@mui/material';
// import { useEffect, useState } from 'react';
// import IdSearch from './IdSearch';
// import CoordinatesSearch from './CoordinatesSearch';
// import React from 'react';
//
// const InputForm = () => {
//   const { t } = useTranslation();
//
//   const SELECT_ID = 'id';
//   const SELECT_COORDINATES = 'coordinates';
//
//   const options = [
//     { value: SELECT_ID, label: t('home.input_form.select_options.id') },
//     { value: SELECT_COORDINATES, label: t('home.input_form.select_options.coordinates') },
//   ];
//
//   const [selectedOption, selectOption] = useState(SELECT_ID);
//   useEffect(() => {}, [selectedOption]);
//
//   const handleChange = (selectEvent) => {
//     selectOption(selectEvent.target.value);
//   };
//
//   const handleSubmit = () => {};
//
//   return (
//     <>
//       <div className="text-box-transparent form-style p-5 mt-5">
//         <FormControl>
//           <Stack spacing={3}>
//             <Select
//               id="search-select"
//               onChange={(e) => handleChange(e)}
//               className="form-select"
//               value={selectedOption}>
//               {options.map((option) => (
//                 <MenuItem
//                   value={option.value}
//                   key={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//
//             {selectedOption !== SELECT_ID || <IdSearch />}
//             {selectedOption !== SELECT_COORDINATES || <CoordinatesSearch />}
//             <Button
//               variant="contained"
//               className="btn btn-primary mt-5"
//               onClick={() => handleSubmit()}>
//               Search
//             </Button>
//           </Stack>
//         </FormControl>
//       </div>
//     </>
//   );
// };
//
// export default InputForm;
