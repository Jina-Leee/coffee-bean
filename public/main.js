const mexico = document.getElementById('mexico');
const ethiopia = document.getElementById('ethiopia');
const kenya = document.getElementById('kenya');
const tanzania = document.getElementById('tanzania');
const yemen = document.getElementById('yemen');
const india = document.getElementById('india');
const indonesia = document.getElementById('indonesia');
const papua = document.getElementById('papua');
const cuba = document.getElementById('cuba');
const jamaica = document.getElementById('jamaica');
const guatemala = document.getElementById('guatemala');
const panama = document.getElementById('panama');
const hawaii = document.getElementById('hawaii');
const colombia = document.getElementById('colombia');
const brazil = document.getElementById('brazil');

const mexicoCancel = document.getElementById('mexico-cancel');
const ethiopiaCancel = document.getElementById('ethiopia-cancel');
const kenyaCancel = document.getElementById('kenya-cancel');
const tanzaniaCancel = document.getElementById('tanzania-cancel');
const yemenCancel = document.getElementById('yemen-cancel');
const indiaCancel = document.getElementById('india-cancel');
const indonesiaCancel = document.getElementById('indonesia-cancel');
const papuaCancel = document.getElementById('papua-cancel');
const cubaCancel = document.getElementById('cuba-cancel');
const jamaicaCancel = document.getElementById('jamaica-cancel');
const guatemalaCancel = document.getElementById('guatemala-cancel');
const panamaCancel = document.getElementById('panama-cancel');
const hawaiiCancel = document.getElementById('hawaii-cancel');
const colombiaCancel = document.getElementById('colombia-cancel');
const brazilCancel = document.getElementById('brazil-cancel');

const black = document.getElementById('black');

function handleModal() {
  console.log(this.id);
  const cancelButtonText = this.id + '-cancel';
  const cancelButton = document.getElementById(cancelButtonText);
  const modalText = this.id + '-modal';
  console.log(modalText);
  const modal = document.getElementById(modalText);
  cancelButton.style.display = 'block';
  modal.style.display = 'block';
  black.style.display = 'block';
}

function handleCancel() {
  console.log(this.id);
  const country = this.id.split('-')[0];
  const modalText = country + '-modal';
  const modal = document.getElementById(modalText);
  this.style.display = 'none';
  modal.style.display = 'none';
  black.style.display = 'none';
}

mexico.addEventListener('click', handleModal);
ethiopia.addEventListener('click', handleModal);
kenya.addEventListener('click', handleModal);
tanzania.addEventListener('click', handleModal);
yemen.addEventListener('click', handleModal);
india.addEventListener('click', handleModal);
indonesia.addEventListener('click', handleModal);
papua.addEventListener('click', handleModal);
cuba.addEventListener('click', handleModal);
jamaica.addEventListener('click', handleModal);
guatemala.addEventListener('click', handleModal);
panama.addEventListener('click', handleModal);
hawaii.addEventListener('click', handleModal);
colombia.addEventListener('click', handleModal);
brazil.addEventListener('click', handleModal);

mexicoCancel.addEventListener('click', handleCancel);
ethiopiaCancel.addEventListener('click', handleCancel);
kenyaCancel.addEventListener('click', handleCancel);
tanzaniaCancel.addEventListener('click', handleCancel);
yemenCancel.addEventListener('click', handleCancel);
indiaCancel.addEventListener('click', handleCancel);
indonesiaCancel.addEventListener('click', handleCancel);
papuaCancel.addEventListener('click', handleCancel);
cubaCancel.addEventListener('click', handleCancel);
jamaicaCancel.addEventListener('click', handleCancel);
guatemalaCancel.addEventListener('click', handleCancel);
panamaCancel.addEventListener('click', handleCancel);
hawaiiCancel.addEventListener('click', handleCancel);
colombiaCancel.addEventListener('click', handleCancel);
brazilCancel.addEventListener('click', handleCancel);
