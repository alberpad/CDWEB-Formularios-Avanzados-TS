<template>
  <b-form @submit.prevent="submitActivity" class="mb-5">
    <activity-personal-data
      :personal_data="activity.personal_data"
    ></activity-personal-data>
    <activity-type-selection
      :activity_type_selection="activity.activity_type_selection"
    >
    </activity-type-selection>
    <component
      :is="activityComponent"
      :activity_selected_data="activity.activity_selected_data"
    ></component>

    <b-row class="mt-3">
      <b-col>
        <b-form-checkbox
            name="terms"
            v-model="activity.terms"
            v-validate="'required'"
            :state="activity.terms ? 'valid' : (reset ? null : 'invalid')"
            :unchecked-value="false"
        >
            Acepto los términos de uso
        </b-form-checkbox>
      </b-col>
      </b-row>

  <b-row>
    <b-col>
      <b-button
          class="mt-3"
          type="submit"
          variant="primary"
          block
      >
          Enviar
      </b-button>
    </b-col>
    <b-col>
      <b-button
          class="mt-3 text-white"
          variant="warning"
          block
          @click="clearErrors"
      >
          Limpiar errores
      </b-button>
    </b-col>
    <b-col>
      <b-button
          class="mt-3 text-white"
          block
          variant="info"
          @click="clearForm"
      >
          Limpiar formulario
      </b-button>
    </b-col>
    <b-col>
      <b-button
          class="mt-3 text-white"
          block
          @click="clearFormAndErrors"
      >
          Limpiar formulario y errores
      </b-button>
    </b-col>
    </b-row>
  </b-form>
</template>