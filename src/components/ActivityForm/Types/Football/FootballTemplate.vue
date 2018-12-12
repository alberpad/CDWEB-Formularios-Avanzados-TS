<template>
    <b-card title="Formulario de fútbol" class="mt-3">
        <b-form-group label="Tu equipo de fútbol">
            <b-form-input
                autocomplete="off"
                v-model="activity_selected_data.team"
                v-validate="'required|min:2'"
                data-vv-as="Equipo"
                :state="$parent.validateState('team')"
                name="team"
                placeholder="Introduce tu equipo"
            >
            </b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('team') }}
            </b-form-invalid-feedback>
        </b-form-group>
    </b-card>
</template>