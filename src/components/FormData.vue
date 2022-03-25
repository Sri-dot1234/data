<template>
  <div class="container">
    <form>
      <h3 class="contact-heading">Add a Contact</h3>
      <div class="form-group row">
        <label for="sel1" class="col-sm-4 col-form-label contact-heading"
          >select which form you want to fill out:</label
        >
        <div class="col-sm-4">
          <select
            class="form-control"
            value="basic_contact"
            id="sel1"
            name="select1"
            v-model="form_data.select1"
            required
          >
            <option value="basic_contact">Basic Add contact Form</option>
            <option value="Normal_contact">Normal Add contact Form</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="sel2" class="col-sm-2 col-form-label contact-heading"
          >select Action set</label
        >
        <div class="col-sm-4">
          <select
            class="form-control"
            value="select_one"
            id="sel2"
            name="select2"
            v-model="form_data.select2"
            required
          >
            <option value="select_one">please select one</option>
            <option value="select_two">please select two</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="fristName" class="col-sm-2 col-form-label"
          >Frist Name</label
        >
        <div class="col-sm-4">
          <input
            type="text"
            name="frist_name"
            v-model="form_data.frist_name"
            class="form-control"
            id="fristName"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="LastName" class="col-sm-2 col-form-label">Last Name</label>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            v-model="form_data.last_name"
            name="last_name"
            id="LastName"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-4">
          <input
            type="email"
            name="email"
            v-model="form_data.email"
            class="form-control"
            id="email"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="phone1" class="col-sm-2 col-form-label">Phone1</label>
        <div class="col-sm-2">
          <select
            class="form-control"
            value="work"
            name="phone1"
            v-model="form_data.phone1"
            id="phone1"
            required
          >
            <option value="work" selected>work</option>
            <option value="home">home</option>
          </select>
        </div>
        <div class="col-sm-2">
          <input
            type="tel"
            name="number1"
            v-model="form_data.number1"
            class="form-control"
            id="number1"
            required
          />
        </div>
        <div class="col-sm-2">
          <input
            type="tel"
            name="number2"
            v-model="form_data.number2"
            class="form-control"
            id="number2"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="fax1" class="col-sm-2 col-form-label">Fax1</label>
        <div class="col-sm-2">
          <select
            class="form-control"
            name="fax1"
            value="work1"
            v-model="form_data.fax1"
            id="fax1"
            required
          >
            <option value="work1">work</option>
            <option value="home1">home</option>
          </select>
        </div>
        <div class="col-sm-2">
          <input
            type="tel"
            name="number3"
            v-model="form_data.number3"
            class="form-control"
            id="number3"
            required
          />
        </div>
      </div>

      <div class="contact-tag">
        <h5>Add Tags</h5>
        <br />
        <p>
          Tags are used to categerioze your contacts or triggered automated<br />
          compaigns
        </p>
        <input
          type="text"
          class="col-sm-5 form-control tag"
          name="tag"
          v-model="form_data.tag"
          placeholder="please slecect a tag"
          required
        />
        <button type="button" class="btn btn-primary m-3" @click="submitForm">
          Save
        </button>
        <button type="button" class="btn btn-light groove m-2">
          Save & Add Another Contact
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormData",
  data() {
    return {
      form_data: {
        select1: "basic_contact",
        select2: "select_one",
        frist_name: "",
        last_name: "",
        email: "",
        phone1: "work",
        number1: null,
        number2: null,
        fax1: "work1",
        number3: null,
        tag: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch("PostData", this.form_data);
      this.form_data = "";
       this.$router.push({ name: "GetData" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-heading,
.contact-tag {
  text-align: left;
}

.btn-light {
  font: inherit;
  border: 1px solid #babcbd;
  background-color: white;
  color: #0076bb;
  cursor: pointer;
  border-radius: 10px;
}
@media screen and (min-width:1200px) {
#sel1 {
  margin-left: -110px;
  }
  @media screen and (min-width:1200px) {
  select,input {
  border-radius: 10px;
  margin-left: -70px;
}
}
}
.tag {
  margin-left: 5px;
}


</style>
