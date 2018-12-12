<template>
    <b-card title="Datos personales" class="mt-3">
        <b-row>
            <b-col>
                <b-form-group label="Nombre">
                    <b-form-input
                        autocomplete="off"
                        v-model="personal_data.name"
                        v-validate="'required|min:2'"
                        :state="$parent.validateState('name')"
                        name="name"
                        data-vv-as="nombre"
                        placeholder="Introduce tu nombre"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.first('name') }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Apellidos">
                    <b-form-input
                        autocomplete="off"
                        v-model="personal_data.surname"
                        v-validate="'required|min:4'"
                        :state="$parent.validateState('surname')"
                        name="surname"
                        data-vv-as="apellido"
                        placeholder="Introduce tus apellidos"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback>
                        {{ errors.first('surname') }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
    </b-card>
</template>
