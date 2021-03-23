package com.lucamartinelli.app.travelsite.registration.health;

import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Liveness;
import org.eclipse.microprofile.health.Readiness;

@Readiness
@Liveness
public class HealthService implements HealthCheck {

	@Override
	public HealthCheckResponse call() {
		return HealthCheckResponse.named("service-check").up().build();
	}

}
