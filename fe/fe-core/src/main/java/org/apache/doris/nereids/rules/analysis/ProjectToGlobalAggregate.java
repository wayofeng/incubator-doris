// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package org.apache.doris.nereids.rules.analysis;

import org.apache.doris.nereids.operators.plans.logical.LogicalAggregate;
import org.apache.doris.nereids.rules.Rule;
import org.apache.doris.nereids.rules.RuleType;
import org.apache.doris.nereids.trees.expressions.Expression;
import org.apache.doris.nereids.trees.expressions.functions.AggregateFunction;
import org.apache.doris.nereids.trees.plans.Plan;

import com.google.common.collect.ImmutableList;

/** ProjectToGlobalAggregate. */
public class ProjectToGlobalAggregate extends OneAnalysisRuleFactory {
    @Override
    public Rule<Plan> build() {
        return RuleType.PROJECT_TO_GLOBAL_AGGREGATE.build(
           logicalProject().then(project -> {
               boolean needGlobalAggregate = project.operator.getProjects()
                       .stream()
                       .anyMatch(this::hasNonWindowedAggregateFunction);

               if (needGlobalAggregate) {
                   LogicalAggregate op = new LogicalAggregate(ImmutableList.of(), project.operator.getProjects());
                   return plan(op, project.child());
               } else {
                   return project;
               }
           })
        );
    }

    private boolean hasNonWindowedAggregateFunction(Expression expression) {
        // TODO: exclude windowed aggregate function
        return expression.anyMatch(AggregateFunction.class::isInstance);
    }
}
