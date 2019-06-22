import { Validator } from './Validtor';

type Control = string | number | boolean | null | undefined | any[];

interface Schema {
	method: Validator;
	args?: any;
	message: string;
}

interface Response {
	isValid: boolean;
	message: string;
}

export class FormValidator {
	constructor(private validations: Schema[]) {}

	public async validate(value: Control): Promise<Response> {
		for (const validation of this.validations) {
			let passed = false;
			switch (validation.method) {
				case Validator.REQUIRED:
					passed = this.required(value);
					break;
				case Validator.EMAIL:
					passed = this.email(value);
					break;
				case Validator.PATTERN:
					passed = this.pattern(value, new RegExp(validation.args as string));
					break;
			}
			if (!passed) {
				return { isValid: false, message: validation.message };
			}
		}
		return { isValid: true, message: '' };
	}

	private required(value: Control): boolean {
		if (typeof value === 'number') {
			return true;
		}
		if (Array.isArray(value) && value.length > 0) {
			return true;
		}
		return !!value;
	}

	private email(value: Control): boolean {
		return this.pattern(
			value,
			/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
		);
	}

	private pattern(value: Control, pattern: RegExp): boolean {
		return value ? pattern.test(value.toString()) : false;
	}
}
