import NavbarPengajar from '../../../components/private/shared/NavbarPengajar';
import AddMateri from '../../../components/private/Pengajar/AddMateri';
import PengajarCourses from '../../../components/private/Pengajar/PengajarCourses';
import Footer from '../../../components/public/shared/Footer';

import React from 'react'

const AddCourse = () => {
  return (
    <div>
      <NavbarPengajar />
      <PengajarCourses />
      <Footer />
    </div>
  )
}

export default AddCourse
