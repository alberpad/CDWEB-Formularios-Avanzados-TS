import { Component, Vue, Inject, Prop } from 'vue-property-decorator';
import Template from './TennisTemplate.vue';
import { Validator } from 'vee-validate';
import { ActivitySelectedData } from '@/modules/types';

@Component({
  mixins: [Template],
})
export default class Tennis extends Vue {
  @Inject('$validator') public $validator!: Validator;

  @Prop({ type: Object, required: true })
  private activity_selected_data!: ActivitySelectedData;
}
