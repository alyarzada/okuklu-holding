import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../ceramics/images/lapiss.jpg';

// mui
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Ceramics = () => {
  return (
    <div id="ceramics-section">
      <div className="overlay"></div>
      <header>
        <h1>Keramoqranitler</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <a className="text-light">Ana səhifə</a>
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Keramoqranitler
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <div class="container-fluid">
          <div class="row">
            <div class="col-2 p-0">
              <div className="filter-title">
                <h4>Filter</h4>
              </div>
              <div class="filter-section">
                <TextField
                  id="outlined-bLapisc"
                  label="Məhsulun adını yazın"
                  variant="outlined"
                />
                <br />
                <br />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Ölçülər
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="60x120"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="30x60"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="60x60"
                    />
                  </RadioGroup>
                </FormControl>
                <br />
                <br />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Ölkələr
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Türkiyə"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Hindistan"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="İran"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="col-10">
              <div className="products-title">
                <h4>Məhsullar</h4>
              </div>
              <div class="products-section">
                <div className="row">
                  <div class="col-3">
                    <Link to='/eachproducts'>
                      <img src={img1} className="img-fluid" alt="" />
                      <h3>Lapis</h3>
                    </Link>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                  <div class="col-3">
                    <img src={img1} className="img-fluid" alt="" />
                    <h3>Lapis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ceramics;
